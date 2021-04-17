// @flow
import React, { memo, useEffect, useState } from 'react';
import MainLayout from 'layout/MainLayout';
import Pagination from 'react-js-pagination';
// import Input from 'components/Input';
// import Checkbox from 'components/Checkbox';
// import ROUTERS from 'constants/router';

type Props = {
  getUser: Function,
  dataUser: Object,
};

const MainPage = ({ getUser, dataUser }: Props) => {
  const itemsCountPage = 5;

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [totalItem, setTotalItem] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);

  const startPage = (pageIndex - 1) * itemsCountPage;
  const [paged, setPaged] = useState(startPage);
  console.log(dataUser && dataUser, 'dataUser');
  const [listDataUser, setListDataUser] = useState(dataUser || []);

  useEffect(() => {
    setPaged(startPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  console.log(listDataUser, 'listDataUser');
  useEffect(() => {
    setTotalItem(dataUser && dataUser.length);
  }, [dataUser]);

  useEffect(() => {
    setListDataUser(dataUser.slice(startPage, startPage + itemsCountPage));
  }, [dataUser, startPage, paged]);

  const renderDataTable =
    listDataUser &&
    listDataUser.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td className="py-1">
            <img src={item.avatar} alt={item.name} />
          </td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
        </tr>
      );
    });
  const handlePageChange = (e) => {
    setPageIndex(e);
  };
  return (
    <MainLayout>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>VatNo.</th>
                      <th>Created</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{renderDataTable}</tbody>
                </table>
              </div>
            </div>
            {totalItem && totalItem > 5 && (
              <div>
                <div className="wrapper-pagination">
                  <Pagination
                    activePage={pageIndex}
                    itemsCountPerPage={itemsCountPage}
                    totalItemsCount={totalItem}
                    pageRangeDisplayed={
                      Math.ceil(totalItem / itemsCountPage) < 10 ? Math.ceil(totalItem / itemsCountPage) : 10
                    }
                    onChange={(eventKey) => handlePageChange(eventKey)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default memo<Props>(MainPage);
