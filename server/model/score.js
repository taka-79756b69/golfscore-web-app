const { Schema, default: mongoose } = require("mongoose");

const ScoreSchema = new Schema({

  courseName: String,
  playDate: Date,

  name1: String,
  name2: String,
  name3: String,
  name4: String,

  player: Number,

  course1_no: String,
  course1_score1: Number,
  course1_put1: Number,
  course1_olympic1: Number,
  course1_lasvegas1: Number,
  course1_order1: Number,
  course1_score2: Number,
  course1_put2: Number,
  course1_olympic2: Number,
  course1_lasvegas2: Number,
  course1_order2: Number,
  course1_score3: Number,
  course1_put3: Number,
  course1_olympic3: Number,
  course1_lasvegas3: Number,
  course1_order3: Number,
  course1_score4: Number,
  course1_put4: Number,
  course1_olympic4: Number,
  course1_lasvegas4: Number,
  course1_order4: Number,

  course2_no: String,
  course2_score1: Number,
  course2_put1: Number,
  course2_olympic1: Number,
  course2_lasvegas1: Number,
  course2_score2: Number,
  course2_put2: Number,
  course2_olympic2: Number,
  course2_lasvegas2: Number,
  course2_score3: Number,
  course2_put3: Number,
  course2_olympic3: Number,
  course2_lasvegas3: Number,
  course2_score4: Number,
  course2_put4: Number,
  course2_olympic4: Number,
  course2_lasvegas4: Number,

  course3_no: String,
  course3_score1: Number,
  course3_put1: Number,
  course3_olympic1: Number,
  course3_lasvegas1: Number,
  course3_score2: Number,
  course3_put2: Number,
  course3_olympic2: Number,
  course3_lasvegas2: Number,
  course3_score3: Number,
  course3_put3: Number,
  course3_olympic3: Number,
  course3_lasvegas3: Number,
  course3_score4: Number,
  course3_put4: Number,
  course3_olympic4: Number,
  course3_lasvegas4: Number,

  course4_no: String,
  course4_score1: Number,
  course4_put1: Number,
  course4_olympic1: Number,
  course4_lasvegas1: Number,
  course4_score2: Number,
  course4_put2: Number,
  course4_olympic2: Number,
  course4_lasvegas2: Number,
  course4_score3: Number,
  course4_put3: Number,
  course4_olympic3: Number,
  course4_lasvegas3: Number,
  course4_score4: Number,
  course4_put4: Number,
  course4_olympic4: Number,
  course4_lasvegas4: Number,

  course5_no: String,
  course5_score1: Number,
  course5_put1: Number,
  course5_olympic1: Number,
  course5_lasvegas1: Number,
  course5_score2: Number,
  course5_put2: Number,
  course5_olympic2: Number,
  course5_lasvegas2: Number,
  course5_score3: Number,
  course5_put3: Number,
  course5_olympic3: Number,
  course5_lasvegas3: Number,
  course5_score4: Number,
  course5_put4: Number,
  course5_olympic4: Number,
  course5_lasvegas4: Number,

  course6_no: String,
  course6_score1: Number,
  course6_put1: Number,
  course6_olympic1: Number,
  course6_lasvegas1: Number,
  course6_score2: Number,
  course6_put2: Number,
  course6_olympic2: Number,
  course6_lasvegas2: Number,
  course6_score3: Number,
  course6_put3: Number,
  course6_olympic3: Number,
  course6_lasvegas3: Number,
  course6_score4: Number,
  course6_put4: Number,
  course6_olympic4: Number,
  course6_lasvegas4: Number,

  course7_no: String,
  course7_score1: Number,
  course7_put1: Number,
  course7_olympic1: Number,
  course7_lasvegas1: Number,
  course7_score2: Number,
  course7_put2: Number,
  course7_olympic2: Number,
  course7_lasvegas2: Number,
  course7_score3: Number,
  course7_put3: Number,
  course7_olympic3: Number,
  course7_lasvegas3: Number,
  course7_score4: Number,
  course7_put4: Number,
  course7_olympic4: Number,
  course7_lasvegas4: Number,

  course8_no: String,
  course8_score1: Number,
  course8_put1: Number,
  course8_olympic1: Number,
  course8_lasvegas1: Number,
  course8_score2: Number,
  course8_put2: Number,
  course8_olympic2: Number,
  course8_lasvegas2: Number,
  course8_score3: Number,
  course8_put3: Number,
  course8_olympic3: Number,
  course8_lasvegas3: Number,
  course8_score4: Number,
  course8_put4: Number,
  course8_olympic4: Number,
  course8_lasvegas4: Number,

  course9_no: String,
  course9_score1: Number,
  course9_put1: Number,
  course9_olympic1: Number,
  course9_lasvegas1: Number,
  course9_score2: Number,
  course9_put2: Number,
  course9_olympic2: Number,
  course9_lasvegas2: Number,
  course9_score3: Number,
  course9_put3: Number,
  course9_olympic3: Number,
  course9_lasvegas3: Number,
  course9_score4: Number,
  course9_put4: Number,
  course9_olympic4: Number,
  course9_lasvegas4: Number,

  course10_no: String,
  course10_score1: Number,
  course10_put1: Number,
  course10_olympic1: Number,
  course10_lasvegas1: Number,
  course10_score2: Number,
  course10_put2: Number,
  course10_olympic2: Number,
  course10_lasvegas2: Number,
  course10_score3: Number,
  course10_put3: Number,
  course10_olympic3: Number,
  course10_lasvegas3: Number,
  course10_score4: Number,
  course10_put4: Number,
  course10_olympic4: Number,
  course10_lasvegas4: Number,

  course11_no: String,
  course11_score1: Number,
  course11_put1: Number,
  course11_olympic1: Number,
  course11_lasvegas1: Number,
  course11_score2: Number,
  course11_put2: Number,
  course11_olympic2: Number,
  course11_lasvegas2: Number,
  course11_score3: Number,
  course11_put3: Number,
  course11_olympic3: Number,
  course11_lasvegas3: Number,
  course11_score4: Number,
  course11_put4: Number,
  course11_olympic4: Number,
  course11_lasvegas4: Number,

  course12_no: String,
  course12_score1: Number,
  course12_put1: Number,
  course12_olympic1: Number,
  course12_lasvegas1: Number,
  course12_score2: Number,
  course12_put2: Number,
  course12_olympic2: Number,
  course12_lasvegas2: Number,
  course12_score3: Number,
  course12_put3: Number,
  course12_olympic3: Number,
  course12_lasvegas3: Number,
  course12_score4: Number,
  course12_put4: Number,
  course12_olympic4: Number,
  course12_lasvegas4: Number,

  course13_no: String,
  course13_score1: Number,
  course13_put1: Number,
  course13_olympic1: Number,
  course13_lasvegas1: Number,
  course13_score2: Number,
  course13_put2: Number,
  course13_olympic2: Number,
  course13_lasvegas2: Number,
  course13_score3: Number,
  course13_put3: Number,
  course13_olympic3: Number,
  course13_lasvegas3: Number,
  course13_score4: Number,
  course13_put4: Number,
  course13_olympic4: Number,
  course13_lasvegas4: Number,

  course14_no: String,
  course14_score1: Number,
  course14_put1: Number,
  course14_olympic1: Number,
  course14_lasvegas1: Number,
  course14_score2: Number,
  course14_put2: Number,
  course14_olympic2: Number,
  course14_lasvegas2: Number,
  course14_score3: Number,
  course14_put3: Number,
  course14_olympic3: Number,
  course14_lasvegas3: Number,
  course14_score4: Number,
  course14_put4: Number,
  course14_olympic4: Number,
  course14_lasvegas4: Number,

  course15_no: String,
  course15_score1: Number,
  course15_put1: Number,
  course15_olympic1: Number,
  course15_lasvegas1: Number,
  course15_score2: Number,
  course15_put2: Number,
  course15_olympic2: Number,
  course15_lasvegas2: Number,
  course15_score3: Number,
  course15_put3: Number,
  course15_olympic3: Number,
  course15_lasvegas3: Number,
  course15_score4: Number,
  course15_put4: Number,
  course15_olympic4: Number,
  course15_lasvegas4: Number,

  course16_no: String,
  course16_score1: Number,
  course16_put1: Number,
  course16_olympic1: Number,
  course16_lasvegas1: Number,
  course16_score2: Number,
  course16_put2: Number,
  course16_olympic2: Number,
  course16_lasvegas2: Number,
  course16_score3: Number,
  course16_put3: Number,
  course16_olympic3: Number,
  course16_lasvegas3: Number,
  course16_score4: Number,
  course16_put4: Number,
  course16_olympic4: Number,
  course16_lasvegas4: Number,

  course17_no: String,
  course17_score1: Number,
  course17_put1: Number,
  course17_olympic1: Number,
  course17_lasvegas1: Number,
  course17_score2: Number,
  course17_put2: Number,
  course17_olympic2: Number,
  course17_lasvegas2: Number,
  course17_score3: Number,
  course17_put3: Number,
  course17_olympic3: Number,
  course17_lasvegas3: Number,
  course17_score4: Number,
  course17_put4: Number,
  course17_olympic4: Number,
  course17_lasvegas4: Number,

  course18_no: String,
  course18_score1: Number,
  course18_put1: Number,
  course18_olympic1: Number,
  course18_lasvegas1: Number,
  course18_score2: Number,
  course18_put2: Number,
  course18_olympic2: Number,
  course18_lasvegas2: Number,
  course18_score3: Number,
  course18_put3: Number,
  course18_olympic3: Number,
  course18_lasvegas3: Number,
  course18_score4: Number,
  course18_put4: Number,
  course18_olympic4: Number,
  course18_lasvegas4: Number,
  })

module.exports = mongoose.model('Score', ScoreSchema)
