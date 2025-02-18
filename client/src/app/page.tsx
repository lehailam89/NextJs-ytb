import Image from "next/image";

export default function Home() {
  return (
   <>
    <main>
      <h1 className="text-4xl roboto-custom text-center">Home</h1>
      <Image 
        src='https://png.pngtree.com/png-clipart/20241124/original/pngtree-dragon-ball-png-image_17288378.png'
        alt="dalab"
        width={300}
        height={300}
        quality={100}
      />
    </main>
   </>
  );
}
