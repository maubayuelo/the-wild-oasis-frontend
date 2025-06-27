// UpdateProfileForm.js

"use client";

import Image from 'next/image';
import { useState } from 'react';
import { getCode } from 'country-list';
import { useFormStatus } from 'react-dom';
import { updateGuest } from '../_lib/actions';


function UpdateProfileForm({children, guest}) {

    const [count, setCount] = useState();
    const {id, fullName, nationality, email, phone, nationalID} = guest || {};
    const cleanedNationality = nationality?.trim();
    const rawCode = cleanedNationality ? getCode(cleanedNationality) : null;
    const isoCode = rawCode ? rawCode.toLowerCase() : 'un';

    

    

    return (
        <form
          method="POST"
          action={updateGuest}
          className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
          <div className="space-y-2">
            <label>Full name</label>
            <input
              disabled
              name="fullName"
              type="text"
              autoComplete="name"
              required
              minLength={3}
              maxLength={50}
              placeholder="Enter your full name"
              defaultValue={fullName}
              className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label>Email address</label>
            <input
              disabled
              name="email"
              defaultValue={email || ''}
              className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="nationality">Where are you from?</label>
              <div>
                <Image
                  src={`https://flagcdn.com/w40/${isoCode !== 'unknown' ? isoCode : 'un'}.png`}
                  width={32}
                  height={24}
                  alt="Country flag"
                  className="h-5 w-auto rounded-sm"
                />
              </div>
            </div>
            {children}
            
          </div>

          

          <div className="space-y-2">
            <label htmlFor="nationalID">National ID number</label>
            <input
              defaultValue={nationalID || ''}
              type="text"
              autoComplete="national-id"
              name="nationalID"
              className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            />
          </div>

          <div className="flex justify-end items-center gap-6">
            <Button />
          </div>
        </form>
    )
}

function Button(){
  const {pending} = useFormStatus();
  return(
    <button
      type='submit'
      disabled={pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
      {pending ? "Updating..." : "Update profile"}
    </button>
  )
}

export default UpdateProfileForm
