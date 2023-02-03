import { SetStateAction, useState } from 'react';
import { IState as Props } from '../../types';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<SetStateAction<Props['people']>>;
}

const ListForm = ({ people, setPeople }: IProps) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    img: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age, 10),
        url: input.img,
        note: input.note,
      },
    ]);
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" type="button" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default ListForm;
