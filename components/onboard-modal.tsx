'use client';

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
import { Button } from "@/components/ui/button";

export const OnboardModal = () => {
    const Onboard = useonBoardModal();
    const { toast } = useToast();
    
    return ( 
        <Modal
            title="AWS Account Onboarding"
            description="Onboard AWS account to start using all the listed services."
            isOpen={Onboard.isOpen}
            onClose={() => {
                Onboard.onClose();
                toast({
                  description: "AWS Account Onboarding Cancelled.",
                })
            }}
        >
            <div className="float-right space-x-3">
                <Button 
                    variant='outline' 
                    onClick={() => {
                        Onboard.onClose();
                        toast({
                          description: "AWS Account Onboarding Cancelled.",
                        })
                    }}
                >
                    Cancel
                </Button>
                <Button disabled variant="default">Submit</Button>
            </div>
            
        </Modal>
    );
}
