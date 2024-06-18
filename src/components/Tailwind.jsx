import s from './Tailwind.module.css';
export const Tailwind = () => {
  return (
    <div className={s.inner}>
      <h1 className='text-5xl font-bold text-center py-4 text-violet-700 underline'>Hello Tailwind</h1>

      <div className='grid  gap-2 p-4 md:grid-cols-2 md:text-2xl lg:grid-cols-3 mx-auto'>
        <p className='text-xl text-red-500 hover:text-blue-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quas harum nulla culpa exercitationem possimus
          tenetur, commodi ea nesciunt maxime voluptatum repellat odio, ipsa quia cum iusto. Obcaecati, beatae in!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quas harum nulla culpa exercitationem possimus
          tenetur, commodi ea nesciunt maxime voluptatum repellat odio, ipsa quia cum iusto. Obcaecati, beatae in!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quas harum nulla culpa exercitationem possimus
          tenetur, commodi ea nesciunt maxime voluptatum repellat odio, ipsa quia cum iusto. Obcaecati, beatae in!
        </p>
      </div>

      <div className='w-40 h-40 bg-red-500 shadow-xl'></div>
      <div className='w-40 h-40 bg-gradient-to-tr from-pink-500  to-violet-500 shadow-xl'></div>
    </div>
  );
};
