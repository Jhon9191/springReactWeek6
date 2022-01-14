import React from 'react'
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import FormCard from 'components/FormCard';

type Props = {
    movie : Movie,
}

export default function Form() {

    const params = useParams();

    return (
       <FormCard movieId={`${params.movieId}`}/>
    )
}