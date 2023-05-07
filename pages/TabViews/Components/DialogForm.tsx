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
  Grid,
  Container,
  Avatar,
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

const avatars = [
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/17.jpg',
  '/avatar2.png',
  '/avatar3.png',
  '/avatar4.png',
];

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
  const [selectedAvatar, setSelectedAvatar] = useState('');

  const handleAvatarChange = (event: SelectChangeEvent<string>) => {
    setSelectedAvatar(event.target.value as string);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Container>
            <TextField
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Container>
            {' '}
            <TextField
              label="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Container>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Container>
            {' '}
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                label="Role"
                name="role"
                value={values.role}
                onChange={handleChange}
                size="small"
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Avatar Seçin</FormLabel>
            <RadioGroup name="avatar" value={selectedAvatar} onChange={handleAvatarChange}>
              {avatars.map((avatar) => (
                <FormControlLabel
                  key={avatar}
                  value={avatar}
                  control={
                    <Radio
                      icon={
                        <Avatar
                          sx={{ width: 30, height: 30, borderRadius: '0px' }}
                          alt={`Avatar ${avatar}`}
                          src={avatar}
                        />
                      }
                      checkedIcon={
                        <Avatar
                          sx={{ width: 30, height: 30, borderRadius: '0px' }}
                          alt={`Avatar ${avatar}`}
                          src={avatar}
                        />
                      }
                    />
                  }
                  label=""
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}
