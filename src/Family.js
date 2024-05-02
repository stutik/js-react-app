const members = [
  {
    name: "Devesh",
    location: "India",
    partner: "Juhi",
  },
  {
    name: "Sarvesh",
    location: "UK",
    partner: "Anju",
  },
  {
    name: "Ankita",
    location: "Netherland",
    partner: "Roopanshu",
  },
];

const Family = () => {
  return (
    <table>
      <tbody>
        {members.map((member, index) => {
          return (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.location}</td>
              <td>{member.partner}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Family;
