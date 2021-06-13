import { useHistory } from 'react-router-dom';

export const getCityFromParams = (props) =>{

    const history = useHistory();

    const {
      location: { search },
    } = history;

    const searchParams = new URLSearchParams(search);
    const cityName = searchParams.get('city');

    return {
      cityName
    }
}
