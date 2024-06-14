import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { petFormSchema } from '../../schemas/petForm';

export const PetFormRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(petFormSchema),
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className='formWrapper'>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <label className='label'>
          <span>Owner Name:</span>
          <input {...register('ownerName')} className='input' placeholder='Enter owner name' />
          {errors.ownerName && <div className='errorField'>❌ {errors.ownerName.message}</div>}
        </label>
        <label className='label'>
          <span>Owner Phone:</span>
          <input {...register('phone')} className='input' placeholder='Enter owner name' />
          {errors.phone && <div className='errorField'>❌ {errors.phone.message}</div>}
        </label>
        <label className='label'>
          <span>Owner Email:</span>
          <input {...register('email')} className='input' placeholder='Enter owner name' />
          {errors.email && <div className='errorField'>❌ {errors.email.message}</div>}
        </label>
        <label className='label'>
          <span>Pet name:</span>
          <input {...register('petName')} className='input' placeholder='Enter pet name' />
          {errors.petName && <div className='errorField'>❌ {errors.petName.message}</div>}
        </label>
        <label className='label'>
          <span>Additional info:</span>
          <textarea {...register('additional')} rows='5' className='input' placeholder='Enter other info' />
          {errors.additional && <div className='errorField'>❌ {errors.additional.message}</div>}
        </label>

        <label className='label'>
          <span>City:</span>
          <select {...register('city')} className='input' placeholder='Enter owner name'>
            <option value='Kyiv'>Kyiv</option>
            <option value='Lviv'>Lviv</option>
            <option value='Odessa'>Odessa</option>
            <option value='Kharkiv'>Kharkiv</option>
            <option value='Dnipro'>Dnipro</option>
          </select>
        </label>
        <label>
          <input {...register('gender')} type='radio' className='input' value='male' />
          <span> male</span>
        </label>
        <label>
          <input {...register('gender')} type='radio' className='input' value='female' />
          <span> female</span>
        </label>
        <label>
          <input {...register('agree')} type='checkbox' className='input' />
          <span> I agree with rules</span>
        </label>

        <button className='btn'>Register</button>
      </form>
    </div>
  );
};
