'use client';

import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';


import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react"
import axios from "axios";
import UseInfraModal from '@/hooks/use-infra-modal';

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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from '@/lib/utils';

const FormSchema = z.object({
    aws_account: z.string({
        required_error: "Please select an AWS account.",
    }),
    
  })


export const  InfraModal = () => {
    const [ loading, setloading ] = useState(false);
    const [ apidata, setapiData ] = useState([]);
    const Infra = UseInfraModal();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

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
        router.push(`/dashboard/${data.aws_account}`)

    }
    return (
        <Modal
            title="Select AWS Account"
            description="To start working with all deployed resources in that account."
            isOpen={Infra.isOpen}
            onClose={() => { router.push('/') }}
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
                            onClick={() => { router.push('/')}}
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
