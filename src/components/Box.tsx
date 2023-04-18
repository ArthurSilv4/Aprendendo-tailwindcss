export const Box = () => {
    return (
        <div className="bg-gray-100 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
            <img className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-60 md:h-auto " src="./public/aluno.jpg" alt="Aluno" />
            <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
                <div className="text-lg font-semibold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit! Sint eos culpa sed asperiores esse impedit, nulla inventore expedita veniam reiciendis dignissimos perspiciatis atque blanditiis, ipsam, quam numquam dolore?
                </div>
                <div className="font-midium">
                    <div className="text-blue-600 font-bold">Arthur de souza</div>
                    <div className="text-gray-500">Aluno da blabblalabla</div>
                </div>
            </div>
        </div>
    )
}