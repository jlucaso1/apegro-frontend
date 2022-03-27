
type Props = {
  text: string;
}

export const JokeView: React.FC<Props> = ({ text }) => {
  return (
    <div className='text-white border border-double border-1 border-slate-400 p-3 max-w-lg text-justify'>
      {text}
    </div>
  )
}