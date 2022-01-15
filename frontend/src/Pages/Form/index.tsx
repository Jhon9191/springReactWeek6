import React from 'react'
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import FormCard from 'components/FormCard';

export default function Form() {

    const params = useParams();

    return (
       <FormCard movieId={`${params.movieId}`}/>
    )
}