'use client';

import Modal from "./ui/modal";
import UseKMSModal from "@/hooks/use-kms-modal";
import { useToast } from "@/components/ui/use-toast";
import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const FormSchema = z.object({
    aws_account: z.string({
        required_error: "Please select an AWS account.",
    }),
    
})

export const KMSModal = () => {
    const [ loading, setloading ] = useState(false);
    const [ apidata, setapiData ] = useState([]);
    const KMS = UseKMSModal();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    useEffect(() => {
        setloading(true);
        fetch('/api/onboard')
        .then((res) => res.json())
        .then((apidata) => {
            setapiData(apidata)
        })
        setloading(false);
    },[])

    const onSubmit = async (data: FormData) => {
        console.log(data)
    };

    return ( 
        <Modal
            title="Create a KMS Key"
            description="This action is is only performed on Onboarded Accounts"
            isOpen={KMS.isOpen}
            onClose={() => {
                KMS.onClose();
                toast({
                    title: "AWS Key Management Service.",
                    description: "Cancelled.",
                })
            }}
        >
                        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="aws_account"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Account Name</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                        <SelectValue placeholder="Select an AWS account" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {apidata.map((item) => (
                                            <SelectItem value={item.AccountName}>{item.AccountName}  ( Account Number : {item.AccountNumber} )</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                        />
                    <div className="float-right space-x-3">
                        <Button 
                            variant='outline'
                            disabled={loading}
                            onClick={() => {
                                KMS.onClose();
                                toast({
                                    title: "AWS Key Management Service.",
                                    description: "Cancelled.",
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
 
