export type UserFormProps = {
  signup: boolean;
};

export function UserForm({ signup }: UserFormProps) {
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submit');
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <fieldset>
          <legend>Form</legend>
          {signup ? (
            <input name="email" type="email" placeholder="Email" />
          ) : (
            <></>
          )}
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
