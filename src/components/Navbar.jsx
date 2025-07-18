import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex justify-between">
      <Image src="/airbnblogo.png" width={150} height={100}></Image>
    </div>
  );
}
