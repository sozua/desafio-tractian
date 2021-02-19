import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoreTypes } from "../state/store";
import { findSingleUser } from "../utils/api";
import { UserProps } from "../utils/types";

const useUserLogged = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [actualUser, setActualUser] = useState<UserProps>({});
  const company = useSelector((state: StoreTypes) => state.company);

  useEffect(() => {
    async function getUser() {
      const actualUserData = await findSingleUser(company.actualUser);
      setActualUser(actualUserData);
    }
    if (company.actualUser >= 0) {
      setIsLogged(true);
      getUser();
    } else {
      setIsLogged(false);
    }
  }, [company]);

  return {
    isLogged,
    setIsLogged,
    actualUser,
  };
};

export default useUserLogged;
