'use client';

import { useRouter } from 'next/navigation';

import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { useParams } from "next/navigation"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const FormSchema = z.object({
    email: z
      .string({
        required_error: "Please select an email to display.",
      })
      .email(),
  })


export const InfraModal = () => {
    const [ loading, setloading ] = useState(false);
    const Infra = UseInfraModal();
    const params = useParams();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    const accts = async () => {
        try {
            const accounts = await axios.get('/api/onboard')
            return accounts.data
        }
        catch(error) {
            return error
        }
    }

      const onSubmit = async (data: FormData) => {
        setloading(true);
        router.push('/')
        accts()
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
                        name="email"
                        render={({ field }) => (
                            <FormItem disabled={loading}>
                            <FormLabel>Account Name</FormLabel>
                            <Select disabled={loading} onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an onboarded account" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="m@example.com">m@example.com</SelectItem>
                                <SelectItem value="m@google.com">m@google.com</SelectItem>
                                <SelectItem value="m@support.com">m@support.com</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
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
