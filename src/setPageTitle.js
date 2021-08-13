import {useEffect} from 'react'

function PageTitle(title){

   useEffect(() => {
      document.title = title
    }, [title]);
}

export default PageTitle