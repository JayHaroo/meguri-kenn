"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaPixiv, FaTiktok, FaBluesky } from "react-icons/fa6";
import { SiKofi } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[300px] h-auto items-center justify-center">
        <CardHeader className="flex flex-col items-center justify-center space-y-4 mb-2 w-full">
          <Avatar className="w-[120px] h-[120px]">
            <AvatarImage
              src="./dp.jpeg"
              alt="Avatar Image"
              className="object-cover"
            />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>

          <CardTitle>Meguri.kenn</CardTitle>
          <CardDescription>Hello! I like to draw :{">"} </CardDescription>
          <div className="flex">
            <MdEmail color="white" size={20} className="mr-1" />
            <CardDescription className="text-white">
              meguri.kenn@gmail.com
            </CardDescription>
          </div>
        </CardHeader>
        <Separator />
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <Separator />
        <CardFooter className="flex flex-col items-center justify-center space-y-4">
          <p>Connect with me!</p>
          <div className="grid grid-cols-4 gap-2">
            <FaFacebook
              color="white"
              size={30}
              onClick={() =>
                openUrl(
                  "https://www.facebook.com/profile.php?id=100082973132783"
                )
              }
              title="Facebook"
            />

            <FaInstagram
              color="white"
              size={30}
              onClick={() => openUrl("https://www.instagram.com/meguri.ken/")}
              title="Instagram"
            />

            <FaXTwitter
              color="white"
              size={30}
              onClick={() => openUrl("https://x.com/meguri_kenn")}
              title="X"
            />

            <FaPixiv
              color="white"
              size={30}
              onClick={() => openUrl("https://www.pixiv.net/en/users/76892551")}
              title="Pixiv"
            />

            <FaTiktok
              color="white"
              size={30}
              onClick={() => openUrl("https://www.tiktok.com/@meguri.art")}
              title="TikTok"
            />

            <FaBluesky
              color="white"
              size={30}
              onClick={() =>
                openUrl("https://bsky.app/profile/meguri-kenn.bsky.social")
              }
              title="Bluesky"
            />

            <SiKofi
              color="white"
              size={30}
              onClick={() => openUrl("https://ko-fi.com/meguriken")}
              title="Ko-Fi"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
