import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import React from 'react';
import { Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
    const profession = ['Student', 'Developer', 'Bussiness people', 'Entrepreneur', 'Finance Sector', 'Other']
  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-full min-h-screen p-4 text-white'>
        {/* Image container */}
        <div className='hidden md:flex justify-center items-center w-full md:w-1/2 lg:w-[650px] h-[300px] md:h-screen'>
            <Image 
                src={'/contact-us.png'} 
                width={800} 
                height={800} 
                alt='header icon'
                className='object-contain' 
            /> 
        </div>

        {/* Card container */}
        <div className='flex justify-center items-center w-full md:w-1/2 px-4'>
            <Card className="w-full max-w-[450px] text-white bg-[#16181a] border-none">
                <CardHeader>
                    <CardTitle className='text-xl md:text-[25px]'>Get In Touch !</CardTitle>
                    <CardDescription className='text-gray-300'>
                        Make Magic With a Single Click.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="w-full">
                        <div className="grid gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input id="name" placeholder="Enter your Name" className="w-full" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Input id="email" placeholder="Enter your Email" className="w-full" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Select>
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
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button variant="outline" className='text-black'>
                        Submit <Send className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}

export default ContactUs;