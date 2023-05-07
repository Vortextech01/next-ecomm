const Footer = () => {
  return (
    <footer className='z-10 py-10 text-stone-400'>
      <div className='container'>
        <h5 className='text-lg'>Sapiens IA Laboratories.</h5>
        <p className='mt-4 text-sm text-stone-500'>
          &copy; {new Date().getFullYear()} Paradox Industries.co
        </p>
        <div className='text-sm text-stone-400'>
          Powered by{' '}
          <a
            className='text-sky-600'
            href='https://sapiens-ia.com/'
            rel='noreferrer'
            target='_blank'
          >
            Sapiens IA 
          </a>{' '}
           - {' '}
          <a
            className='text-sky-600'
            href='https://accounts.sapiens-ia.com/'
            rel='noreferrer'
            target='_blank'
          >
            Laboratories
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
