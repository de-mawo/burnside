import Directory from "../../components/directory/directory.component";


const Home = () => {

    const categories = [
      {
        id: 1,
        title: 'Basses',
        imageUrl: 'https://res.cloudinary.com/demawo/image/upload/v1654258145/demawo_store_media/bass_btnznu.jpg',
        
      },
      {
        id: 2,
        title: 'Drums',
        imageUrl: 'https://res.cloudinary.com/demawo/image/upload/v1654258148/demawo_store_media/drums_yxol3l.jpg',
        
      },
      {
        id: 3,
        title: 'Guitars',
        imageUrl: 'https://res.cloudinary.com/demawo/image/upload/v1654259352/demawo_store_media/guitar_utdb4r.jpg',
        
      },
      {
        id: 4,
        title: 'Pianos',
        imageUrl: 'https://res.cloudinary.com/demawo/image/upload/v1654258147/demawo_store_media/piano_xv1sjy.jpg',
        
      },
      {
        id: 5,
        title: 'Studio',
        imageUrl: 'https://res.cloudinary.com/demawo/image/upload/v1654259352/demawo_store_media/headphones_a4pugn.jpg',
        
      }
    ]
    return (
     <Directory categories={categories}/>
    );
  }

  export default Home
