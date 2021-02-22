import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoreTypes } from "../state/store";
import { UserProps } from "../utils/types";

const useUserLogged = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [actualUser, setActualUser] = useState<UserProps>({});
  const company = useSelector((state: StoreTypes) => state.company);

  useEffect(() => {
    if (company.actualUser.id && company.actualUser.id >= 0) {
      setIsLogged(true);
      setActualUser(company.actualUser);
    } else {
      setIsLogged(false);
    }
  }, [company.actualUser]);

  return {
    isLogged,
    setIsLogged,
    actualUser,
    company,
  };
};

export default useUserLogged;
