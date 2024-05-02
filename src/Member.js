const memberObj = [
  { name: "stuti", profile: "UI Developer" },
  { name: "roopanshu", profile: "Backend developer" },
  { name: "stuti", profile: "UI Developer" },
  { name: "stuti", profile: "UI Developer" },
  { name: "stuti", profile: "UI Developer" },
  { name: "stuti", profile: "UI Developer" },
];

const Members = () => {
  return (
    <div>
      <h1>member</h1>
      <table>
        <tbody>
          {memberObj.map((m, index) => {
            return (
              <tr key={index}>
                <td>{m.name}</td>
                <td>{m.profile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
