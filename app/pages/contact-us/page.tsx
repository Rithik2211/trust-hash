'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import React from 'react';
import { Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';

const ContactUs = () => {
    const { toast } = useToast()
    const profession = ['Student', 'Developer', 'Bussiness people', 'Entrepreneur', 'Finance Sector', 'Other']

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", process.env.NEXT_PUBLIC_USER_ACCESS_KEY ?? '');

        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: json,
            });
      
            const result = await response.json();
      
            if (result.success) {
              console.log('Form submission successful:', result);
              toast({
                title: "Success! ",
                description: "Your message has been sent successfully!",
                action: (
                  <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
              })
              if (form) {
                form.reset();
              }
            } else {
              console.error('Form submission failed:', result);
              toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
            }
        } 
        catch (error) {
            console.error('Error submitting the form:', error);
            toast({
                title: "Uh oh! An error occurred.",
                description: "Please check your internet connection and try again.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
        }
    };

  return (
    <div className='flex flex-col md:flex-row justify-between  items-center w-full min-h-screen p-5 text-white'>
        {/* Image container */}
        <div className='hidden md:flex justify-center items-center w-full md:w-1/2 lg:w-[650px] h-[300px] md:h-screen p-4'>
            <Image 
                src={'/contact-us.png'} 
                width={800} 
                height={800} 
                alt='header icon'
                className='object-contain w-full h-full' 
            /> 
        </div>

        {/* Card container */}
        <div className='flex justify-center items-center w-full md:w-1/2 px-4 py-8 md:py-0'>
            <Card className="w-full max-w-[450px] text-white bg-[#16181a] border-none">
                <CardHeader>
                    <CardTitle className='text-xl md:text-[25px]'>Get In Touch !</CardTitle>
                    <CardDescription className='text-gray-300'>
                        Make Magic With a Single Click.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input id="name" name="name" type="text" placeholder="Enter your Name" className="w-full" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="w-full"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Select name="profession">
                                    <SelectTrigger id="framework" className="w-full">
                                        <SelectValue placeholder="Select your Profession" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        {profession.map((option, index) => (
                                            <SelectItem key={index} value={option}>
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Textarea
                                    placeholder="Type your message here."
                                    className="w-full min-h-[100px]"
                                    name="message"
                                    required
                                />
                            </div>
                        </div>
                        <CardFooter className="flex justify-end mt-4">
                            <Button variant="outline" className="text-black" type="submit">
                                Submit <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default ContactUs;