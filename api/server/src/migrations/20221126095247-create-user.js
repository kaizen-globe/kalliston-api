module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['male','female'],
        defaultValue:'male',
      },
      dob: {
        allowNull: true,
        type: Sequelize.DATE
      },
      otp_to_login: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      otp_to_forget: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      avatar: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      firstname: {
        allowNull: true,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email_notification: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      otp_required: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      client_request_notification: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      message_from_client: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      two_factor_auth: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      sync_google_cal: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      bio: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      customized_link: {
        allowNull: true,
        type: Sequelize.STRING
      },
      website_link: {
        allowNull: true,
        type: Sequelize.STRING
      },
      instagram_link: {
        allowNull: true,
        type: Sequelize.STRING
      },
      facebook_link: {
        allowNull: true,
        type: Sequelize.STRING
      },
      tiktok_link: {
        allowNull: true,
        type: Sequelize.STRING
      },
      youtube_link: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cover_image: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      user_type: {
        type: Sequelize.ENUM,
        values: ['client','coach','admin'],
        defaultValue:'client'
      },
      your_goal: {
        allowNull: true,
        type: Sequelize.STRING
      },
      current_fitness_level: {
        type: Sequelize.ENUM,
        values: ['beginner','intermediate','advanced'],
        defaultValue:'beginner'
      },
      latitude: {
        allowNull: true,
        type: Sequelize.REAL
      },
      longitude: {
        allowNull: true,
        type: Sequelize.REAL
      },
      billing_address1: {
        allowNull: true,
        type: Sequelize.STRING
      },
      billing_address2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      pin: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING
      },
      country: {
        allowNull: true,
        type: Sequelize.STRING
      },
      experience: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      certifications: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      areas_of_interest: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      long_description: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};