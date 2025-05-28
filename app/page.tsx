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
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {

  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card className="w-full w-[300px] h-auto items-center justify-center">
          <CardHeader className="flex flex-col items-center justify-center space-y-4 mb-2 w-full">
            <Avatar className="w-[120px] h-[120px]">
              <AvatarImage src="./dp.jpeg" alt="Avatar Image" className="object-cover"/>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            
            <CardTitle>Meguri.kenn</CardTitle>
            <CardDescription>Hello! I like to draw :> </CardDescription>
            
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center space-y-4">
            <p>Connect with me!</p>
            <div className="flex justify-evenly">
              <FaFacebook color="white" size={30}/>
              <FaInstagram color="white" size={30}/>
              <FaXTwitter color="white" size={30}/>
            </div>
          </CardFooter>
        </Card>
    </div>
  );
}
