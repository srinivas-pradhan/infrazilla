'use client';

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
  })



export const OnboardModal = () => {
    const Onboard = useonBoardModal();
    const params = useParams();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            account_number: "",
            regions: ["us_east_1"],
        },
      })
      const onSubmit = async (data: FormData) => {
        try {          
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
                        name="account_number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>AWS Account Number</FormLabel>
                                <FormControl>
                                    <Input  placeholder="AWS Account Number" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your AWS Account Number
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
                                    <Input  placeholder="IAM Role ARN" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            
                        )}
                        
                    />
                    <div className="float-right space-x-3">
                        <Button 
                            variant='outline' 
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
                        <Button variant="default">Submit</Button>
                    </div>
                </form>
            </Form>
        </Modal>
    );
}
