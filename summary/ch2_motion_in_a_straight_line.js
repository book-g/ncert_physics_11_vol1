var equation = require('../equation/ch2_equation_tex.js');

var ch2_summary=[
    `An object is said to be in motion if its position changes with time. The position of the
object can be specified with reference to a conveniently chosen origin. For motion in
a straight line, position to the right of the origin is taken as positive and to the left as
negative. The average speed of an object is greater or equal to the magnitude of the average
velocity over a given time interval.`,
`Instantaneous velocity or simply velocity is defined as the limit of the average velocity
as the time interval ∆t becomes infinitesimally small : $$ ${equation.instantaneous_velocity} $$ The velocity at a particular instant is equal to the slope of the tangent drawn on
position-time graph at that instant.`,
`Average acceleration is the change in velocity divided by the time interval during which
the change occurs : $$ ${equation.average_acceleration} $$`,
`Instantaneous acceleration is defined as the limit of the average acceleration as the
time interval ∆t goes to zero : $$ ${equation.instantaneous_acceleration} $$ The acceleration of an object at a particular time is the slope of the velocity-time
graph at that instant of time. For uniform motion, acceleration is zero and the x-t
graph is a straight line inclined to the time axis and the v-t graph is a straight line
parallel to the time axis. For motion with uniform acceleration, x-t graph is a parabola
while the v-t graph is a straight line inclined to the time axis.`,
`The area under the velocity-time curve between times t₁ and t₂ is equal to the displacement of the object during that interval of time.`,
`For objects in uniformly accelerated rectilinear motion, the five quantities, displacement
x, time taken t, initial velocity v₀
, final velocity v and acceleration a are related by a set
of simple equations called kinematic equations of motion : $$ ${equation.Kinematic_equations_of_motion} $$ if the position of the object at time t = 0 is 0. If the particle starts at x = x0
 , x in above equations is replaced by (x – x₀).` 

];

exports.ch2_summary = ch2_summary;