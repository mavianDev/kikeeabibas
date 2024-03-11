import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img 
        src={offer} 
        width={773} 
        height={687} 
        className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'> Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consectetur non nesciunt error velit quod voluptas repudiandae dicta qui in, 
          quibusdam blanditiis inventore possimus ducimus sunt eius temporibus obcaecati provident minus.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloremque, laborum obcaecati! Repellendus inventore cumque porro eum placeat at commodi quas.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers