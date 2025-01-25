import React, { FC } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import { ItemCardProps } from '@/app/pages/Culture';

interface DialogType{
  index : number;
  item : ItemCardProps;
}

const DialogCard: FC<DialogType> = ({index, item}) => {
    return (
      <Dialog >
        <DialogTrigger asChild>
          <div key={index} className='flex h-[200px] flex-col justify-evenly items-center text-center bg-[#fff] rounded-[18px] text-black px-[24px] py-[16px] hover:-translate-y-1 transform-all duration-500'>
            <Image  src={item?.img} width={60} height={60} alt={item?.title}/>
            <h3 className='text-2xl font-bold mb-2 h-[56px]'>{item?.title}</h3>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle className='text-2xl font-bold'>{item?.title}</DialogTitle>
          <div className="flex flex-row justify-between items-center">
              <div>
                <p className='text-[18px] text-[#6c6f72]'>{item?.description}</p>
              </div>
              <div>
                  <Image  src={item?.img} width={60} height={60} alt={item?.title}/>
              </div>
            </div>
        </DialogContent>
      </Dialog>
    )
}

export default DialogCard;