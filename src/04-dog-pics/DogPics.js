import { useEffect, useState } from "react"

export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  const [dogUrl, setDogUrl] = useState('');

  const getDogUrl = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
  }

  const handleClick = () => {
    getDogUrl().then(res => setDogUrl(res));
  }

  useEffect(() => {
    getDogUrl().then(res => setDogUrl(res))
  }, []);

  return (
    <div className='dog-pics'>
      <img src={dogUrl} alt="Dog" />
      <button onClick={handleClick}>🐶</button>
    </div>
  )
}
