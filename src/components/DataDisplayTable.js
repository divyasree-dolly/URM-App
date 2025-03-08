import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const DataDisplayTable = ({ jobPostings, urmCandidates, deiInitiatives }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>Job Postings</Th>
            <Th>URM Candidates</Th>
            <Th>DEI Initiatives</Th>
          </tr>
        </thead>
        <tbody>
          {jobPostings.map((jobPosting, index) => (
            <tr key={index}>
              <Td>{jobPosting.title}</Td>
              <Td>{urmCandidates[index]}</Td>
              <Td>{deiInitiatives[index]}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default DataDisplayTable;
