
export default function MobileLayout({children}) {

  return (
    <div className={'flex bg-gray-200 justify-center'}>
      <div className={'w-full md:w-[640px]'}>
        {children}
      </div>
    </div>
  );
}