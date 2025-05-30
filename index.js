const express = require('express');
const app = express();
const usersRoute = require('./routes/users');

app.use(express.json());
app.use('/api/users', usersRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
