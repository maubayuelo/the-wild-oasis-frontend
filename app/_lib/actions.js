// actions.js
"use server";

import { redirect } from "next/dist/server/api-utils";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function updateGuest(formData) {
  //console.log("Updating guest", { formData });
  // Do DB update here
  const session = await auth();
  console.log("Session:", session);
  if (!session) {
    throw new Error("You must be signed in to update your profile.");
  }

  const guestId = session.user.guestId || session.user.id;
  if (!guestId) {
  throw new Error("User guest ID not found in session.");
}

  const rawNationality = formData.get("nationality");

if (!rawNationality || !rawNationality.includes('%')) {
  throw new Error("Invalid nationality format.");
}



  const nationalID= formData.get("nationalID");
  const [nationality, countryFlag] = rawNationality.split('%');
  if(!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Please provide valid national ID");
  }

  const updatedData={nationality, countryFlag, nationalID};
  
  const {data, error} = await supabase
  .from('guests')
  .update(updatedData)
  .eq('id', guestId)
  .select()
  .single();

  if (error) {
    console.error("Supabase error details:", error.message, error.details, error.hint);
    throw new Error("Could not update profile");
  }

  revalidatePath("/account/profile");

}

export async function signInAction() {
  await signIn("google", {redirectTo: "/account"});
}

export async function signOutAction() {
  await signOut( {redirectTo: "/"});
}

export async function deleteBooking(){}