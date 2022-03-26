import Router from 'next/router'

type CategoryProps = {
  name: string;
}

export const Category: React.FC<CategoryProps> = ({ name }) => {
  return (
    <button className="border border-1 border-yellow-100 text-white p-1" onClick={() => Router.push(`/category/${name}`)}>
      {name}
    </button>
  )
}