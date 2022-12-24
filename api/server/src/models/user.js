module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['male','female'],
      defaultValue:'male',
    },
    dob: {
      allowNull: true,
      type: DataTypes.DATE
    },
    otp_to_login: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    otp_to_forget: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    avatar: {
      allowNull: true,
      type: DataTypes.STRING
    },
    firstname: {
      allowNull: true,
      type: DataTypes.STRING
    },
    lastname: {
      allowNull: true,
      type: DataTypes.STRING
    },
    email_notification: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    },
    otp_required: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    },
    client_request_notification: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    },
    message_from_client: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    },
    two_factor_auth: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    },
    sync_google_cal: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    },
    bio: {
      allowNull: true,
      type: DataTypes.BLOB
    },
    customized_link: {
      allowNull: true,
      type: DataTypes.STRING
    },
    website_link: {
      allowNull: true,
      type: DataTypes.STRING
    },
    instagram_link: {
      allowNull: true,
      type: DataTypes.STRING
    },
    facebook_link: {
      allowNull: true,
      type: DataTypes.STRING
    },
    tiktok_link: {
      allowNull: true,
      type: DataTypes.STRING
    },
    youtube_link: {
      allowNull: true,
      type: DataTypes.STRING
    },
    cover_image: {
      allowNull: true,
      type: DataTypes.BLOB
    },
    user_type: {
      type: DataTypes.ENUM,
      values: ['client','coach','admin'],
      defaultValue:'client'
    },
    your_goal: {
      allowNull: true,
      type: DataTypes.STRING
    },
    current_fitness_level: {
      type: DataTypes.ENUM,
      values: ['beginner','intermediate','advanced'],
      defaultValue:'beginner'
    },
    latitude: {
      allowNull: true,
      type: DataTypes.REAL
    },
    longitude: {
      allowNull: true,
      type: DataTypes.REAL
    },
    billing_address1: {
      allowNull: true,
      type: DataTypes.STRING
    },
    billing_address2: {
      allowNull: true,
      type: DataTypes.STRING
    },
    city: {
      allowNull: true,
      type: DataTypes.STRING
    },
    country: {
      allowNull: true,
      type: DataTypes.STRING
    },
    pin: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    experience: {
      allowNull: true,
      type: DataTypes.BLOB
    },
    certifications: {
      allowNull: true,
      type: DataTypes.BLOB
    },
    areas_of_interest: {
      allowNull: true,
      type: DataTypes.BLOB
    },
    long_description: {
      allowNull: true,
      type: DataTypes.BLOB
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
  return User;
};