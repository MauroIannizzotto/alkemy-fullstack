import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../redux/actions";
import Card from "../Card/Card";
export default function Home() {
  const dispatch = useDispatch();
  const allBalances = useSelector((state) => state.balances); 


  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch]);
console.log("BALANCESS", allBalances)
  return (
    <div>
      <div>
        <h1>hola</h1>
        {allBalances.all?.map ((e) => {
          return (
            <Fragment>
                    <Card
                      concept={e.concept}
                      money={e.money}
                      category={e.category}
                      id={e.id}
                      key={e.id}
                      createdAt={e.createdAt}
                      updatedAt={e.updatedAt}
                    />
                  </Fragment>
          )
        }) }
      </div>
    </div>
  );
}
