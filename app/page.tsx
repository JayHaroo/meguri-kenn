"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaPixiv, FaTiktok, FaBluesky } from "react-icons/fa6";
import { SiKofi } from "react-icons/si";

export default function Home() {

  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card className="w-[300px] h-auto items-center justify-center">
          <CardHeader className="flex flex-col items-center justify-center space-y-4 mb-2 w-full">
            <Avatar className="w-[120px] h-[120px]">
              <AvatarImage src="./dp.jpeg" alt="Avatar Image" className="object-cover"/>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            
            <CardTitle>Meguri.kenn</CardTitle>
            <CardDescription>Hello! I like to draw :{'>'} </CardDescription>
            <CardDescription>meguri.kenn@gmail.com</CardDescription>
            
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center space-y-4">
            <p>Connect with me!</p>
            <div className="grid grid-cols-4 gap-2">
              <FaFacebook color="white" size={30}
                onClick={() => openUrl("https://www.facebook.com/profile.php?id=100082973132783")}/>

              <FaInstagram color="white" size={30}
                onClick={() => openUrl("https://www.instagram.com/meguri.ken/")}
              />

              <FaXTwitter color="white" size={30}/>
              <FaPixiv color="white" size={30}/>
              <FaTiktok color="white" size={30}/>
              <FaBluesky color="white" size={30}/>
              <SiKofi color="white" size={30}/>
            </div>
          </CardFooter>
        </Card>
    </div>
  );
}
