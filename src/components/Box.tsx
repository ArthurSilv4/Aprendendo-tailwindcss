export const Box = () => {
    return (
        <div>
            <div className="bg-gray-100 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
                <img className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-60 md:h-auto " src="./public/Eu.jpeg" alt="Foto minha" />
                <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
                    <div className="text-lg font-semibold">
                        Desenvolvedor front-end, apaixonado por criar sites e aplicativos. Já domino HTML, CSS e JavaScript e estou sempre em busca de aprender mais.
                    </div>
                    <div className="font-midium">
                        <div className="text-blue-600 font-bold">Arthur de souza silva</div>
                        <div className="text-gray-500">Desenvolvedor Front-end</div>
                    </div>
                </div>
            </div>
            <a
                className='block shadow bg-blue-600 text-white text-center p-4 mt-5 rounded-xl hover:bg-blue-500'
                href="https://www.linkedin.com/in/arthur-de-souza-47807723a/">
                Conheça mais!!!
            </a>

        </div>
    )
}