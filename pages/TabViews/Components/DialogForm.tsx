import { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Button,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

type Role = 'admin' | 'editor' | 'user';

interface FormValues {
  fullName: string;
  username: string;
  email: string;
  role: Role;
  avatar: string;
}

const defaultValues: FormValues = {
  fullName: '',
  username: '',
  email: '',
  role: 'user',
  avatar: '',
};

const avatars = ['/avatar1.png', '/avatar2.png', '/avatar3.png', '/avatar4.png'];

export default function Form() {
  const [values, setValues] = useState<FormValues>(defaultValues);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    setValues(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
      />

      <TextField label="Username" name="username" value={values.username} onChange={handleChange} />

      <TextField
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />

      <FormControl>
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          label="Role"
          name="role"
          value={values.role}
          onChange={handleChange}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="editor">Editor</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Avatar</FormLabel>
        <RadioGroup name="avatar" value={values.avatar} onChange={handleChange}>
          {avatars.map((avatar) => (
            <FormControlLabel
              key={avatar}
              value={avatar}
              control={<Radio />}
              label={<img src={avatar} alt="" width={50} height={50} />}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}
