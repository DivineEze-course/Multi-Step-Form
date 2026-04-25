export default function() {

    return (
        <div class ="container">
        <div class="progress">
    <img src="./assets/images/bg-sidebar-desktop.svg" alt="" class="bg-sidebar-desktop"/>
    <div class="steps">
        <div class="step active">
            <div class="step-circle">1</div>
            <div class="step-label">
                <span>Step 1</span>
                <strong>Your Info</strong>
            </div>
        </div>
        <div class="step">
            <div class="step-circle">2</div>
            <div class="step-label">
                <span>Step 2</span>
                <strong>Select Plan</strong>
            </div>
        </div>
        <div class="step">
            <div class="step-circle">3</div>
            <div class="step-label">
                <span>Step 3</span>
                <strong>Add-Ons</strong>
            </div>
        </div>
        <div class="step">
            <div class="step-circle">4</div>
            <div class="step-label">
                <span>Step 4</span>
                <strong>Summary</strong>
            </div>
        </div>
    </div>
</div>
        <div class="information">
        <div  class="main">
            <div>
            <h2>Personal info</h2>
            <p>Please fill in your personal information below.</p>
            </div>
            <div class="user-info">
            <label for="name">Name
                <input type="text" id="name" placeholder="e.g John Doe"/>
            </label>

             <label for="email">Email
                <input type="email" id="email" placeholder="e.g john.doe@example.com"/>
            </label>

            <label for="phone">Phone Number
                <input type="tel" id="phone" placeholder="e.g +1 234 456 789"/>
            </label>
            </div>
            <div class="button-container">
         <button id="back">Go Back</button>
        <button id="next">Next Step</button>
            </div>
        </div>
        
        </div>
    </div>
    )
}