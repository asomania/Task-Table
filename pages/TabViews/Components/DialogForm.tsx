import { useEffect, useState } from 'react';
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
import { useRouter } from 'next/router';

type Role = 'Contributor' | 'Author' | 'Administrator' | 'Subscriber';

interface FormValues {
  id: number;
  name: string;
  username: string;
  email: string;
  role: Role;
  avatar: string;
}

const defaultValues: FormValues = {
  id: 0,
  name: '',
  username: '',
  email: '',
  role: 'Contributor',
  avatar: '',
};

const avatars = [
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/17.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/78.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/74.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/75.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/76.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/77.jpg',
];

export default function Form({ editValues }: { editValues: FormValues | null }) {
  const [values, setValues] = useState<FormValues>(defaultValues);
  useEffect(() => {
    if (editValues !== null) {
      setValues(editValues);
    }
  }, [editValues]);

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
  const router = useRouter();

  const personSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(values);
    values.avatar = selectedAvatar;

    //if values == null create user else edit user
    if (values === null) {
      setValues(defaultValues);
      // Kullanıcıyı oluştur
      const postData = async (url: string, data: FormValues) => {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return response.json();
      };

      postData('https://6450be73e1f6f1bb229de7cf.mockapi.io/persons', values)
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      router.reload();
    } else {
      // Kullanıcıyı düzenle
      const editData = async (url: string, data: any) => {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return response.json();
      };

      editData('https://6450be73e1f6f1bb229de7cf.mockapi.io/persons/' + values.id, values)
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      router.reload();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4} sx={{ mt: 1, width: '356px' }}>
        <Grid item xs={12}>
          <Container>
            <TextField
              label="Full Name"
              name="name"
              value={values.name}
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
                <MenuItem value="Contributor">Contributor</MenuItem>
                <MenuItem value="Author">Author</MenuItem>
                <MenuItem value="Administrator">Administrator</MenuItem>
                <MenuItem value="Subscriber">Subscriber</MenuItem>
              </Select>
            </FormControl>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Select Avatar</FormLabel>
              <RadioGroup
                name="avatar"
                value={selectedAvatar}
                onChange={handleAvatarChange}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                {avatars.map((avatar) => (
                  <FormControlLabel
                    key={avatar}
                    value={avatar}
                    sx={{ width: 40, height: 40 }}
                    control={
                      <Radio
                        icon={
                          <Avatar
                            alt={`Avatar ${avatar}`}
                            src={avatar}
                            sx={{ borderRadius: '5px' }}
                          />
                        }
                        checkedIcon={
                          <Avatar
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '5px',
                              boxShadow: '0 0 0 2px #1976d2',
                            }}
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
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container sx={{ textAlign: 'center' }}>
            <Button
              type="submit"
              onClick={personSubmit}
              variant="contained"
              sx={{ mb: 2, textTransform: 'capitalize' }}
              disabled={
                !values.name || !values.username || !values.email || !values.role || !selectedAvatar
              }
            >
              Create User
            </Button>
          </Container>
        </Grid>
      </Grid>
    </form>
  );
}
