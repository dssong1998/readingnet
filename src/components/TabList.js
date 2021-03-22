import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import MapIcon from '@material-ui/icons/Map';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {Link} from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/Donation">
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Donation" />
    </ListItem>
  </div>
);

export const firstListItems = (
  <div>
    <ListSubheader inset>Introduction</ListSubheader>
    <ListItem button component={Link} to="/Vision">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Vision" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Greeting" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="history" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="map" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactSupportIcon />
      </ListItemIcon>
      <ListItemText primary="Contacts" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Activities</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Notice" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Campaigns" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Datas" />
    </ListItem>
  </div>
);
