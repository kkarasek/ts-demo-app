import { IState as IProps } from '../../types';

const List = ({ people }: IProps) => {
  const renderList = (): JSX.Element[] =>
    people.map((e) => (
      <li key={e.name} className="List">
        <div className="ListHeader">
          <img className="List-img" src={e.url} alt="" />
          <h2>{e.name}</h2>
        </div>
        <p>{e.age} years old</p>
        <p className="List-note">{e.note}</p>
      </li>
    ));

  return <ul>{renderList()}</ul>;
};

export default List;
