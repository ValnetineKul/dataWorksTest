import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://alex.devel.softservice.org/testapi/'
});

export const fetchMoneyFromBackend = () => instance.get()
  .then(response => {
      if (response.request.status === 200) {
        return response.data;
      }
    }
  );

