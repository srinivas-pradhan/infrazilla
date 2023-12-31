'use client';

import React, { useState } from "react";
import { Loader2 } from "lucide-react"
import axios from "axios";
import useonBoardModal from '@/hooks/use-onboard-modal';

import Modal from '@/components/ui/modal';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { useParams } from "next/navigation"


const regions = [
    {
      id: "us_east_1",
      label: "US-EAST-1",
    },
    {
      id: "us_east_2",
      label: "US-EAST-2",
    },
    {
      id: "us_west_1",
      label: "US-WEST-1",
    }
  ] as const

const formSchema = z.object({
    account_number: z.string().length(12,{
        message: "AWS Account Number is 12 digits.",
    }),
    regions: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    iam_role: z.string().regex(
      /^arn:aws:iam::\d{12}:role\/[A-Za-z0-9_]+$/,
      "Please pass a correct AWS IAM Role ARN"
    ),
    account_name: z.string().regex(
      /[a-z]{3}-[a-z]{3}/,
      "Please pass the account name in [abc-xyz] format"
    ),
  })



export const OnboardModal = () => {
    const [ loading, setloading ] = useState(false);
    const Onboard = useonBoardModal();
    const params = useParams();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            account_number: "",
            regions: ["us_east_1"],
            account_name: "",
        },
      })
      const onSubmit = async (data: FormData) => {
        try {        
          setloading(true);  
          await axios.post('/api/onboard',data)
          Onboard.onClose();
          toast({
            title: "AWS Account Onboarding.",
            description: "SUCCESS",
          })
        } catch (error) {
            if (error.response.status === 409) {
              Onboard.onClose();
              toast({
                variant: "destructive",
                title: "AWS Account Onboarding.",
                description: "FAILED - Already Exixts.",
              })
            }
            else {
              Onboard.onClose();
              toast({
                variant: "destructive",
                title: "AWS Account Onboarding.",
                description: "FAILED - Please try again.",
              })
            }
        } finally{
          setloading(false);
        }
      }

    return ( 
        <Modal
            title="AWS Account Onboarding"
            description="Onboard AWS account to start using all the listed services."
            isOpen={Onboard.isOpen}
            onClose={() => {
                Onboard.onClose();
                toast({
                    title: "AWS Account Onboarding.",
                    description: "Cancelled.",
                })
            }}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="account_name"
                        render={({ field }) => (
                            
                            <FormItem>
                                <FormLabel>AWS Account Name</FormLabel>
                                <FormControl>
                                    <Input  disabled={loading} placeholder="AWS Account Name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your AWS Account Name ex: [abc-xyz]
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                            
                        )}
                        
                    />
                    <FormField
                        control={form.control}
                        name="account_number"
                        render={({ field }) => (
                            
                            <FormItem>
                                <FormLabel>AWS Account Number</FormLabel>
                                <FormControl>
                                    <Input  disabled={loading} placeholder="AWS Account Number" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your AWS Account Name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                            
                        )}
                        
                    />
                    {regions.map((region) => (
                      <FormField
                        key={region.id}
                        control={form.control}
                        name="regions"
                        render={({ field }) => {
                          return(
                            <FormItem
                              key={region.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                            <FormControl>
                              <Checkbox
                                disabled={loading}
                                checked={field.value?.includes(region.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, region.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== region.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                              <FormLabel className="font-normal">
                                {region.label}
                              </FormLabel>
                            </FormItem>
                            
                          )
                        }}
                      />
                    ))}
                    <FormField
                        control={form.control}
                        name="iam_role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>IAM Role ARN</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} placeholder="IAM Role ARN" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            
                        )}
                        
                    />
                    <div className="float-right space-x-3">
                        <Button 
                            variant='outline'
                            disabled={loading}
                            onClick={() => {
                                Onboard.onClose();
                                toast({
                                    title: "AWS Account Onboarding.",
                                    description: "CANCELLED."
                                })
                            }}
                        >
                            Cancel
                        </Button>
                          {
                          loading ? 
                          <Button
                            disabled={loading}
                          >
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                          </Button> 
                          : 
                          <Button
                            disabled={loading}
                            variant="default"
                          >
                            Submit
                          </Button>
                        }
                    </div>
                </form>
            </Form>
        </Modal>
    );
}
