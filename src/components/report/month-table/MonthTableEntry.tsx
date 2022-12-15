import styled from "styled-components";

const Entry = styled.div`
  text-align: center;
  width: 170px;
  height: 116px;
  vertical-align: middle;
  line-height: 116px;
  position: relative;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const TableEntryEven = styled(Entry)`
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TableEntryUnEven = styled(Entry)`
  background-color: rgba(195, 195, 187, 0.47);
`; 

const Date = styled.div`
  position: absolute;
  right: 10px;
  bottom: 40px;
  color: rgba(74, 74, 74, 1);
  font-size: 14px;
`;

interface TableEntryProps {
  data: {
    index: number;
    amount: string | number;
    date: Date;
  };
}

const TableEntry = ({ data }: TableEntryProps) => {
  const isEven = (value: number) => value % 2 === 0;
  return (
    <>
      {isEven(data.index) ? (
        <Entry key={data.index}>
          <TableEntryEven>{data.amount}h</TableEntryEven>

          <Date>{data.date.toLocaleDateString()}</Date>
        </Entry>
      ) : (
        <Entry key={data.index}>
          <TableEntryUnEven>{data.amount}h</TableEntryUnEven>
          <Date>{data.date.toLocaleDateString()}</Date>
        </Entry>
      )}
    </>
  );
};

export default TableEntry;
