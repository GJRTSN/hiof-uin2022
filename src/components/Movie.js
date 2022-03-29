export default function Movie({ title, actor }) {
    return(
        <div className='border-2 rounded-3xl p-4 text-center'>
            <h1 className="font-bold">{title}</h1>
            <p className="italic">{actor}</p>
            
        </div>
    )
}